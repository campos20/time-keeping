## Requirements

- [Terraform](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli)
- An AWS account
- AWS credentials exported in the terminal

```bash
export AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
export AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
export AWS_DEFAULT_REGION=us-west-2
```

## First time deploy

- Go to the console, and create your own bucket (for infra). Let's say its name is `mysuperbucket`.
- Go to the file [main.tf](main.tf) and replace `MY_BUCKET_NAME` with `mysuperbucket`.
- Since bucket names are unique, replace the var `bucket_name` in the file [modules.tf](modules.tf).
- Run

```bash
terraform init
terraform apply
```

If you agree with the plan shown, type yes.

The frontend address will be shown in the terminal as `cloudfront_domain_name`. Visit it. If nothing is shown, run the commands from the deployment action (or trigger it).
