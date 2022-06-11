import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LAYOUT} from '../../layout/index';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const CommonHeader = ({title, backArrow = false}) => {
  const navigation = useNavigation();
  const countItemsInCart = useSelector(state => state?.cart?.cartItems?.length);
  return (
    <View style={styles.container}>
      {backArrow && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
            <Icon name="arrow-left" size={25} color={LAYOUT.COLORS.PRIMARY} />
          </TouchableOpacity>

          <Text style={styles.headerText}>{title}</Text>
        </View>
      )}
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Icon name="cart-arrow-down" size={23} color={LAYOUT.COLORS.PRIMARY} />
        {countItemsInCart !== 0 && (
          <View
            style={{
              backgroundColor: 'red',
              borderRadius: 12,
              alignItems: 'center',
              position: 'absolute',
              right: -15,
              top: -10,
              width: 20,
              height: 20,
            }}>
            <Text style={{color: 'white', fontSize: 14}}>
              {countItemsInCart}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    elevation: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomColor: LAYOUT.COLORS.PRIMARY,
    borderBottomWidth: 4,
    elevation: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerText: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: '800',
    color: LAYOUT.COLORS.PRIMARY,
  },
});
