import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {LAYOUT} from '../../layout';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductCard = ({image, price, title, index, onPress, addToCart}) => {
  return (
    <View key={index} style={styles.mainShopCatView}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={{height: LAYOUT.WIDTH * 0.23}}>
          <Image
            style={styles.productImage}
            source={{
              uri: `${image}`,
            }}
          />

          <Text
            ellipsizeMode={'tail'}
            numberOfLines={2}
            style={styles.titleStyle}>
            {title}
          </Text>
          <Text style={styles.priceStyle}>Rs {price}</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableOpacity onPress={addToCart} style={styles.cartButton}>
        <Icon name="cart-outline" size={23} color={LAYOUT.COLORS.PRIMARY} />
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  mainShopCatView: {
    width: LAYOUT.WIDTH * 0.3,
    height: LAYOUT.WIDTH / 2.33,
    backgroundColor: '#fff',
    marginLeft: LAYOUT.WIDTH / 39,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  titleStyle: {
    fontSize: 15,
    marginTop: 2,
    marginHorizontal: 4,
    fontFamily: LAYOUT.FONTS.SEMI_BOLD,
    color: LAYOUT.COLORS.BLACK,
  },
  priceStyle: {
    fontSize: 13,
    marginTop: 2,
    marginHorizontal: 4,
    fontFamily: LAYOUT.FONTS.SEMI_BOLD,
    color: LAYOUT.COLORS.PRIMARY,
  },

  productImage: {
    marginVertical: LAYOUT.HEIGHT / 50,
    width: 50,
    height: 50,
    position: 'relative',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  cartButton: {
    backgroundColor: 'white',
    elevation: 3,
    flexDirection: 'row',
    width: 40,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 8,
    right: 7,
    borderRadius: 5,
  },
});
