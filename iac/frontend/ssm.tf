resource "aws_ssm_parameter" "frontend_bucket" {
  name  = "/${terraform.workspace}/${var.project_name}/frontend_bucket"
  type  = "String"
  value = aws_s3_bucket.frontend_bucket.bucket

  tags = {
    (var.type) = var.type_ssm
  }
}

resource "aws_ssm_parameter" "frontend_distribution" {
  name  = "/${terraform.workspace}/${var.project_name}/cloudfront_distribution_id"
  type  = "String"
  value = module.cdn.cf_id

  tags = {
    (var.type) = var.type_ssm
  }
}
