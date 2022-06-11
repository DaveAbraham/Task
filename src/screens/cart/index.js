import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import CommonHeader from '../../components/header';
import {LAYOUT} from '../../layout';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconn from 'react-native-vector-icons/AntDesign';
import {
  increaseItemsCountNumber,
  decreaseItemsCountNumber,
  removeFromCart,
} from '../../redux/reducers/cartReducer';
import {PRODUCT_DATAIL} from '../../constants';

const Cart = ({navigation}) => {
  const {cartItems, updatedCartItems} = useSelector(state => state?.cart);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const totalAmount = () => {
    let totalPrice = 0;
    let vat = 0;
    for (let i = 0; i < cartItems?.length; i++)
      totalPrice =
        totalPrice +
        cartItems[i]?.productDetails.price * cartItems[i]?.itemsInCart;
    return totalPrice;
  };

  useEffect(() => {
    setTotal(totalAmount);
  }, [totalAmount]);

  const handlePlusButton = id => {
    let foundIndex = -1;
    foundIndex = cartItems.findIndex(x => x.productDetails.id === id);
    if (foundIndex != -1) {
      dispatch(increaseItemsCountNumber(foundIndex));
    }
  };
  const handleMinusButton = (id, count) => {
    let foundIndex = -1;
    foundIndex = cartItems.findIndex(x => x.productDetails.id === id);

    if (count == 1 && foundIndex != -1) {
      dispatch(removeFromCart(foundIndex));
    } else if (count != 1 && foundIndex != -1) {
      dispatch(decreaseItemsCountNumber(foundIndex));
    }
  };
  const handleDelete = id => {
    let foundIndex = -1;
    foundIndex = cartItems.findIndex(x => x.productDetails.id === id);

    if (foundIndex != -1) {
      dispatch(removeFromCart(foundIndex));
    }
  };

  const FlatListItemSeparator = () => {
    return <View style={styles.flateListSeparator} />;
  };

  const footer = () => {
    return (
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Total</Text>
        <Text style={styles.footerText}>{`     RS. ${total.toFixed(2)}`}</Text>
      </View>
    );
  };

  const renderItem = ({item}) => {
    const image = item.productDetails.image;
    const productDetails = item.productDetails;

    return (
      <View style={styles.itemConatiner}>
        <View style={styles.counterContainer}>
          <TouchableOpacity
            onPress={() =>
              handlePlusButton(item.productDetails.id, item.itemsInCart)
            }>
            <Iconn
              name="plus"
              size={18}
              style={{paddingRight: 10}}
              color={LAYOUT.COLORS.BLACK}
            />
          </TouchableOpacity>
          <View style={styles.counterTextContainer}>
            <Text style={{fontSize: 10, color: LAYOUT.COLORS.BLACK}}>
              {item.itemsInCart}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              handleMinusButton(item.productDetails.id, item.itemsInCart)
            }>
            <Iconn
              name="minus"
              size={18}
              style={{paddingLeft: 10}}
              color={LAYOUT.COLORS.BLACK}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(PRODUCT_DATAIL, {products: productDetails});
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={{uri: `${image}`}}
              resizeMode={'contain'}
              style={styles.image}
            />

            <Text
              numberOfLines={1}
              ellipsizeMode={'tail'}
              style={styles.titleText}>
              {item.productDetails.title}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.productDetails.id)}>
          <Icon
            name="delete"
            size={19}
            style={{
              paddingRight: LAYOUT.WIDTH / 135,
              paddingLeft: LAYOUT.WIDTH / 135,
            }}
            color={LAYOUT.COLORS.BLACK}
          />
        </TouchableOpacity>
        <Text style={styles.lightFonts}>{`Rs.${(
          item.productDetails.price * item.itemsInCart
        ).toFixed(2)}`}</Text>
      </View>
    );
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <CommonHeader
        title="Cart"
        backArrow={true}
        navigation={navigation}
        showCart={false}
      />

      <FlatList
        data={cartItems}
        renderItem={renderItem}
        ItemSeparatorComponent={FlatListItemSeparator}
        ListFooterComponent={footer}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 20,
    marginBottom: 30,
  },
  footerText: {
    fontFamily: LAYOUT.FONTS.SEMI_BOLD,
    marginLeft: 10,
    color: LAYOUT.COLORS.BLACK,
    fontSize: 15,
    fontWeight: 'bold',
  },
  itemConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterTextContainer: {
    backgroundColor: 'lightgray',
    alignItems: 'center',
    borderRadius: 3,
    padding: 7,
  },
  titleText: {
    fontFamily: LAYOUT.FONTS.LIGHT,
    color: LAYOUT.COLORS.PRIMARY,
    width: 130,
    fontSize: 11,
    paddingLeft: 3,
  },

  image: {
    width: LAYOUT.WIDTH / 6.9,
    height: LAYOUT.HEIGHT / 13,
    left: LAYOUT.WIDTH / 135,
    right: LAYOUT.WIDTH / 135,
    marginVertical: 5,
  },
  flateListSeparator: {
    height: 0.5,
    width: '100%',
    backgroundColor: 'lightgray',
  },
});
