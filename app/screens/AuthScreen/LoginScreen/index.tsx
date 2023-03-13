import React from 'react';

import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import * as Yup from 'yup';

import {AppButton, AppIcon, AppScreen, Block, fields, Form, Text} from '@/components';
import Routes from '@/navigation/Routes';
import {COLORS} from '@/theme';
import {ICONS} from '@/utils';

const initial = {
  email: 'test@test.com',
  password: '123456',
  date: null,
  select: '1',
  autoComplete: '',
  multipleSelect: [],
};

const LoginScreen = () => {
  //   const [loader, setLoader] = useState(false);
  const navigation = useNavigation() as any;

  // const selectOptions: any = [
  //   {
  //     id: 1,
  //     title: '',
  //   },
  //   {
  //     id: 2,
  //     title: 'Elma',
  //   },
  //   {
  //     id: 2,
  //     title: 'Karpuz',
  //   },
  // ];

  const schema = Yup.object({
    email: fields.email.label('Email').required('Lütfen bu alanı doldurunuz!'),
    password: fields.password.label('Password').min(6, 'en az 6 karakter olmalıdır ').required('Lütfen şifre giriniz!'), // prettier-ignoref
    // date: fields.date.label('date').required('aşsldjfa'),
    // select: fields.select(selectOptions, 'string', 'title', 'id'),
  });

  const form = useForm({
    defaultValues: initial,
    resolver: yupResolver(schema),
  });
  const onSubmit = (values: any) => {
    console.log(values);
    navigation.replace(Routes.MAIN_TABS_ROOT);
  };

  return (
    <AppScreen customStyle={{backgroundColor: 'white'}}>
      <Block flex middle>
        <Text t-center fs-32 medium>
          Hello Again!
        </Text>
        <Text t-center fs-16 px-40 mt-10>
          Fill your details or continue with social media
        </Text>
        <Block mt-40>
          <Form schema={schema} form={form} />
        </Block>
        <Block mt-40>
          <AppButton disabled={false} onPress={form.handleSubmit(onSubmit)} bg-primary title="Sign In" />
          <AppButton border titleColor={COLORS.black} mt-10 icon={<AppIcon name={ICONS.google} size={24} color={'#000'} />} title="Sign In with Google" />
        </Block>
      </Block>
      <Block absolute row middle center style={{bottom: 30, width: '120%'}}>
        <Text>New User? </Text>
        <Block pressable onPress={() => navigation.navigate(Routes.REGISTER_SCREEN)}>
          <Text medium>Create Account</Text>
        </Block>
      </Block>
    </AppScreen>
  );
};

export default LoginScreen;
