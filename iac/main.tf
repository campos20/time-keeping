terraform {
  backend "s3" {
    bucket = "MY_BUCKET_NAME"
    key    = "time-keep"
    region = "us-west-2"
  }
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}
