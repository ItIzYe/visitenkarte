FROM nginx

COPY nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html
COPY dist/apps/client .

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
