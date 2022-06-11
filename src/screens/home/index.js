import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import CommonHeader from '../../components/header';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts, getProductDetail} from '../../redux/reducers/homeReducer';
import ProductCard from '../../components/productCard';
import {useNavigation} from '@react-navigation/native';
import {PRODUCT_DATAIL} from '../../constants';
import {
  addToCart,
  increaseItemsCountNumber,
} from '../../redux/reducers/cartReducer';

const Home = () => {
  const navigation = useNavigation();
  const {receivedProducts} = useSelector(state => state?.home);
  const {cartItems} = useSelector(state => state?.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const handleAddToCart = product => {
    if (cartItems?.length === 0) {
      var data = {productDetails: product, itemsInCart: 1};
      dispatch(addToCart(data));
    } else {
      let foundIndex = -1;
      foundIndex = cartItems?.findIndex(
        x => x.productDetails?.id === product?.id,
      );
      if (foundIndex != -1) {
        dispatch(increaseItemsCountNumber(foundIndex));
      } else {
        var data = {productDetails: product, itemsInCart: 1};
        dispatch(addToCart(data));
      }
    }
  };
  const handleOnPress = id => {
    dispatch(getProductDetail(id));
    navigation.navigate(PRODUCT_DATAIL);
  };

  return (
    <>
      <CommonHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {receivedProducts?.map((product, index) => (
            <ProductCard
              image={product.image}
              title={product.title}
              price={product.price}
              onPress={() => handleOnPress(product.id)}
              addToCart={() => handleAddToCart(product)}
              key={index}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
