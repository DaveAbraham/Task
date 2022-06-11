import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {LAYOUT} from '../../layout';
import {useSelector, useDispatch} from 'react-redux';
import {
  addToCart,
  decreaseItemsCountNumber,
  increaseItemsCountNumber,
  removeFromCart,
} from '../../redux/reducers/cartReducer';
import CommonHeader from '../../components/header';
import Icon from 'react-native-vector-icons/AntDesign';

const ProductDetails = () => {
  const {cartItems} = useSelector(state => state?.cart);
  const {image, price, title, description, id} = useSelector(
    state => state?.home?.productDetail,
  );
  const {productDetail} = useSelector(state => state?.home);
  const dispatch = useDispatch();

  const countInCart = id => {
    let foundIndex = -1;
    foundIndex = cartItems?.findIndex(x => x.productDetails?.id === id);
    if (foundIndex != -1) {
      return cartItems[foundIndex].itemsInCart;
    } else {
      return 0;
    }
  };
  const handlePlusButton = id => {
    let foundIndex = -1;
    foundIndex = cartItems?.findIndex(x => x.productDetails?.id === id);
    if (foundIndex != -1) {
      dispatch(increaseItemsCountNumber(foundIndex));
    } else {
      let data = {itemsInCart: 1, productDetails: productDetail};
      dispatch(addToCart(data));
    }
  };
  const handleMinusButton = id => {
    let foundIndex = -1;
    let count = countInCart(id);
    foundIndex = cartItems.findIndex(x => x.productDetails.id === id);

    if (count == 1 && foundIndex != -1) {
      dispatch(removeFromCart(foundIndex));
    } else if (count != 1 && foundIndex != -1) {
      dispatch(decreaseItemsCountNumber(foundIndex));
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <CommonHeader backArrow={true} title="Product detail" />
      <View style={styles.backgroundImageStyle}>
        <Image source={{uri: `${image}`}} style={styles.imageStyle} />
      </View>
      <View style={{marginHorizontal: 10}}>
        <View style={styles.contentView}>
          <Text style={styles.titleStyle}>{title}</Text>

          <Text style={styles.priceStyle}> Rs. {price}</Text>
        </View>
        <Text style={styles.descriptionStyle}>{description}</Text>
      </View>
      <View style={styles.counterContainer}>
        <Text
          style={{
            fontSize: 18,
            marginHorizontal: 10,
            fontWeight: '600',
            color: LAYOUT.COLORS.BLACK,
          }}>
          {'Number of items in cart'}
        </Text>
        <TouchableOpacity onPress={() => handlePlusButton(id)}>
          <Icon
            name="plus"
            size={22}
            style={{paddingRight: 10}}
            color={LAYOUT.COLORS.PRIMARY}
          />
        </TouchableOpacity>
        <View style={styles.counterTextContainer}>
          <Text style={{fontSize: 15, color: LAYOUT.COLORS.BLACK}}>
            {countInCart(id)}
          </Text>
        </View>
        <TouchableOpacity onPress={() => handleMinusButton(id)}>
          <Icon
            name="minus"
            size={22}
            style={{paddingLeft: 10}}
            color={LAYOUT.COLORS.PRIMARY}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  contentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  imageStyle: {
    width: LAYOUT.WIDTH * 0.95,
    height: LAYOUT.HEIGHT * 0.35,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 10,
  },
  backgroundImageStyle: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 10,
  },
  titleStyle: {
    fontFamily: LAYOUT.FONTS.SEMI_BOLD,
    fontSize: 18,
    width: LAYOUT.WIDTH * 0.5,
    color: LAYOUT.COLORS.BLACK,
  },
  priceStyle: {
    fontFamily: LAYOUT.FONTS.SEMI_BOLD,
    fontSize: 18,
    color: LAYOUT.COLORS.PRIMARY,
  },

  descriptionStyle: {
    fontFamily: LAYOUT.FONTS.REGULAR,
    fontSize: 15,
    flexGrow: 4,
    color: LAYOUT.COLORS.BLACK,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 30,
  },
});
