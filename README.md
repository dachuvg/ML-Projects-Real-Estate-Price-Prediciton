# ML-Projects-Real-Estate-Price-Prediciton

A full end=to-end web application to predict house prices in Bengaluru using Python,HTML,CSS,JS.

### Dataset
[House price dataset for Bengaluru](https://www.kaggle.com/datasets/amitabhajoy/bengaluru-house-price-data)

What all are the data that people may consider essential when looking to purchase a house, well of course price is the most important one of all other factors. The dataset includes area_type, availability, location, size, society,total_sqft, bath, balcony, and price where price is used as the target variable. There are other factors as well but when we consider building an online model that people can use quickly to check the predicted prices these factors are more important. This dataset is particularly useful for real estate analysis, housing market trends, and predictive modeling. 

### Model
Using techniques of data cleaning, standardizing and analytics, I trained the Linear regression model on the training data set to get an accuracy of around 85%. Then the pickle files for the prediction model and the json file containing the all the location names were exported.

##Server
A Python Flask server is implemented and we use POST call to get the predicted price from the model we imported into the app.py file. We use GET call to retrieve all the location names from the json file. A predict function will jsonify the inputs and then pass them onto the POST call which will then give us the predicted price for the given inputs.
