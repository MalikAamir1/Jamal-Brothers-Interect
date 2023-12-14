import React from 'react';
import {Dimensions, View} from 'react-native';
import {Chip} from 'react-native-paper';
import COLORS from 'src/Assets/Style/Color';
import Icon from 'react-native-vector-icons/Ionicons';
import InteractParagraph from '../../ReusableComponent/Paragraph';
import {useSelector} from 'react-redux';

function InterestChip(props) {
  const [checked, setChecked] = React.useState(false);
  const isDark = useSelector(state => state.isDark);

  const tap = () => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };
  const emptyIcon = () => null;

  return (
    <View style={{padding: 5}}>
      <Chip
      disabled={props.disabled}
        mode="outlined"
        icon={emptyIcon}
        style={{
          backgroundColor: isDark?.isdark
            ? '#292929'
            : COLORS.bgcolor,
          height: 40,
          // alignSelf: 'flex-start',
          alignItems: 'center',
          borderRadius: 5,
          borderColor: checked ? COLORS.primary : COLORS.border_color,
          borderWidth: checked ? 2 : 1,
        }}
        selected={checked}
        selectedColor={checked ? COLORS.primary : '#000'}
        onPress={tap}>
        <Icon
          name={checked ? props.IconName : null}
          size={15}
          //   color={checked ? '#fff' : COLORS.primary}
          //   style={{marginTop: 5}}
        />
        <InteractParagraph
          color={
            isDark?.isdark && checked
              ? COLORS.primary
              : isDark?.isdark && !checked
              ? COLORS.white
              : !isDark?.isdark && !checked
              ? COLORS.dark
              : COLORS.primary
          }
          p={props.title}
          fw={checked ? '700' : 'normal'}
          fs={12}
          txtAlign={'center'}
        />
      </Chip>
    </View>
  );
}

export default InterestChip;
