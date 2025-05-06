terraform {
  backend "s3" {
    bucket = "MY_BUCKET_NAME"
    key    = "time-keep"
    region = "us-east-1"
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
