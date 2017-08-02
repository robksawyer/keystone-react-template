# Keystone React Template
> This is a very basic template that contains a NodeJS Keystone-based admin area along with a React-based client user interface. The project is also optimized to work with [Heroku](https://www.heroku.com) services.


# Getting Started with Locally

1. Copy `.env.sample` to `.env`
1. Add your own secret key.
1. `yarn install`
1. `yarn start`
1. Check it out!

# Getting Started with Heroku

1. Copy `.env.sample` to `.env`.
1. Update the environment variables based on your own settings or keys.
1. Download the heroku command line tools
1. `heroku create my-cool-app`
1. `yarn install`
1. `git push heroku`
1. Copy `MONGODB_URI` value and paste into new variable named `MONGO_URI`.
1. Add `COOKIE_SECRET` as an environment variable in Heroku app instance settings.
1. Add `NEW_RELIC_APP_NAME` as an environment variable in Heroku app instance settings.
1. Add `NODE_ENV` as an environment variable and use the value `production`.
1. Check it out!

# Heroku Configuration

The following are a curated selection of Heroku add-ons that are critical to the site functioning smoothly.

- Cloudinary
	- This is an image CDN that allows us to also perform image manipulation and upload.
- Mailgun
	- Handles all of the email transactions in the cloud.
- mLab MongoDB
	- A hosted version of MongoDB in the cloud. Easy to scale if needed.
- New Relic APM
	- App performance management.
- Papertrail
	- Helpful for logging and debugging. Without it, we'd have a hard time seeing errors.
