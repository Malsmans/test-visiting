# Deployment Instructions for Netlify

## Setting Environment Variables

Your site needs the following environment variables to work properly on Netlify:

1. Go to your Netlify dashboard: https://app.netlify.com
2. Select your site (visitmotherafrica.com)
3. Go to **Site settings** > **Environment variables**
4. Add these variables:

```
VITE_SUPABASE_URL=https://gimmrrhkygrqbayfysck.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpbW1ycmhreWdycWJheWZ5c2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1NzE4OTMsImV4cCI6MjA3NzE0Nzg5M30.8fAs3gIwvAMYpeReUN8OWh3rJmDiBMLdA0VHw7ogIiE
```

## Optional AI Service Variables

If you want to use the AI chatbot features, add:

```
VITE_OPENAI_API_KEY=your_openai_api_key
VITE_DEEPSEEK_API_KEY=your_deepseek_api_key
```

## After Adding Variables

1. Go to **Deploys** tab
2. Click **Trigger deploy** > **Deploy site**
3. Wait for the build to complete
4. Visit https://visitmotherafrica.com to verify

## Troubleshooting

If the site still doesn't work:
1. Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Check browser console (F12) for errors
3. Verify environment variables are set correctly in Netlify
4. Make sure the latest commit is deployed
