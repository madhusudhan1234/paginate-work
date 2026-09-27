FROM php:7.1-apache

# Use Debian archive repositories because PHP 7.1 image is based
# on an EOL Debian release.
RUN sed -i 's/deb.debian.org/archive.debian.org/g' /etc/apt/sources.list \
    && sed -i 's/security.debian.org/archive.debian.org/g' /etc/apt/sources.list \
    && sed -i '/stretch-updates/d' /etc/apt/sources.list \
    && apt-get -o Acquire::Check-Valid-Until=false update \
    && apt-get install -y --no-install-recommends \
        git \
        unzip \
        libzip-dev \
    && docker-php-ext-install pdo_mysql \
    && a2enmod rewrite \
    && rm -rf /var/lib/apt/lists/*

# Laravel public directory
ENV APACHE_DOCUMENT_ROOT=/var/www/html/public

RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' \
    /etc/apache2/sites-available/*.conf \
    /etc/apache2/apache2.conf \
    /etc/apache2/conf-available/*.conf

WORKDIR /var/www/html

# Old Laravel project -> Composer 1
COPY --from=composer:1.10 /usr/bin/composer /usr/bin/composer

COPY . .

RUN composer install \
    --no-interaction \
    --prefer-dist \
    --ignore-platform-reqs

RUN chown -R www-data:www-data \
    storage \
    bootstrap/cache

EXPOSE 80

CMD ["apache2-foreground"]
