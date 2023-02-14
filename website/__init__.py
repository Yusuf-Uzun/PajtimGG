from flask import Flask

def create_website():
    website = Flask(__name__)
    website.config['SECRET_KEY'] = 'p'

    from .views import views
    from .auth import auth

    website.register_blueprint(views, url_prefix='/')
    website.register_blueprint(auth, url_prefix='/')

    return website