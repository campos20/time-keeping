module "cdn" {
  source  = "cloudposse/cloudfront-s3-cdn/aws"
  version = "0.97.0"

  origin_bucket             = aws_s3_bucket.frontend_bucket.bucket
  s3_access_logging_enabled = false
  logging_enabled           = false
  cached_methods            = ["HEAD", "GET", "OPTIONS"]
  default_ttl               = "86400"
  name                      = "cdn"
  stage                     = terraform.workspace
  error_document            = "index.html"
  dns_alias_enabled         = false
  minimum_protocol_version  = "TLSv1.2_2021"

  custom_error_response = [
    {
      error_caching_min_ttl = 10,
      error_code            = 403
      response_code         = 403
      response_page_path    = "/index.html"
    },
    {
      error_caching_min_ttl = 10,
      error_code            = 404
      response_code         = 404
      response_page_path    = "/index.html"
    }
  ]

  depends_on = [aws_s3_bucket.frontend_bucket]
}
