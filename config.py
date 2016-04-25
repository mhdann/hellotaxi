import os#

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY')

class DevelopmentConfig(Config):
    DEBUG = True
    SECRET_KEY = os.environ.get("SECRET_KEY") or "MYKEY"

class TestingConfig(Config):
    Testing = True

class ProductionConfig(Config):
    pass

config ={
    'development': DevelopmentConfig,
    'testing': TestingConfig,
    'production': ProductionConfig
}