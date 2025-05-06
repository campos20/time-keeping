variable "bucket_name" {
  description = "The name of the S3 bucket to store the frontend build artifacts."
  type        = string
}

variable "project_name" {
  description = "The name of the project."
  type        = string
}

variable "type" {
  default = "type"
}

variable "type_ssm" {
  default = "ssm"
}
