import React, { memo } from 'react';
import { Item, Input, Icon, Button } from 'native-base';

import { styles } from './styles';

const AppTextField = props => {
  return (
    <Item regular style={[styles.textFieldContainer, props.style]}>
      <Input
        placeholder={props.placeholder}
        style={[styles.textField, props.textFieldStyle]}
        autoCapitalize="sentences"
        autoCompleteType='off'
        autoCorrect={false}
        autoFocus={true}
        {...props.textFieldProps}
      />
      {props.rightIcon && (
        <Button transparent rounded onPress={props.onPressRightIcon}>
          <Icon
            name={props.rightIcon}
            type={props.rightIconType}
            style={[styles.rightIcon, props.rightIconStyle]}
          />
        </Button>
      )}
    </Item>
  );
};

export default memo(AppTextField);
