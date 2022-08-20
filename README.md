# ➜ Eleventy Blog Template
## ✨With Netlify CMS Inegrations✨
## ➜ [Demo Site](https://eleventyblogtemplate.netlify.app/)

## Deploying to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/nuckarronjones/11ty-Netlify-Blog-Template&stack=cms)

Use the link above to copy the template to your netlify account, in addition to all the files needed for the CMS to funciton.

### Set Up Authentication
After you deploy the site to netlify, you will need to set up authentication to edit the site. To set this up, navigate to *Site Settings* > *Identity* > *External Providers*

Once you have added a provider, you can navigate to registration preferences to allow "invite only" users to edit site content. Navigate to the site domain and add <code>/admin</code> to edit the blog content through the admin portal. Example: <code>https:// mysitename/admin</code>

## Running Locally

### 1) Clone Repository
```
git clone https://github.com/nuckarronjones/11ty-Netlify-Blog-Template
```

### 2) Navigate to Directory
```
cd [path name]
```

### 3) Install Dependencies
```
npm install
```

### 4) Edit _data/metadata.json
This can be used to edit author information and other site data

### 5) Run Eleventy
```
npx @11ty/eleventy
```

Or Build automatically when a template changes
```
npx @11ty/eleventy --watch
```

Or build locally for local development
```
npx @11ty/eleventy --serve
```

Or in debug mode:
```
DEBUG=* npx @11ty/eleventy
```

