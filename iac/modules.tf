module "frontend" {
  source = "./frontend"

  bucket_name  = "campos20-frontend-${terraform.workspace}"
  project_name = "time_keeping"
}
