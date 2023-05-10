# Use the official NGINX base image
FROM nginx:latest

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start NGINX when the container launches
CMD ["nginx", "-g", "daemon off;"]
