import {View, Text, Image, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import * as Yub from 'yup';
import {Formik} from 'formik';
import {Divider} from '@rneui/themed';

const FormikPost = () => {
  const PLACEHOLDER_IMG =
    'https://images.pexels.com/photos/4004374/pexels-photo-4004374.jpeg?auto=compress&cs=tinysrgb&w=600';

  const upPostSchema = Yub.object().shape({
    imageUrl: Yub.string().url().required('A URL is required'),
    caption: Yub.string().max(
      2200,
      'Caption has reached the characted limited',
    ),
  });

  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);

  return (
    <Formik
      initialValues={{caption: '', imageUrl: ''}}
      onSubmit={values => console.log(values)}
      validationSchema={upPostSchema}
      validateOnMount={true}>
      {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
        <>
          <View
            style={{
              margin: 20,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Image
              source={{uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG}}
              style={{
                width: 100,
                height: 100,
              }}
            />
            <View style={{flex: 1, marginLeft: 10}}>
              <TextInput
                placeholder="Write a caption..."
                style={{color: 'black'}}
                multiline={true}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}></TextInput>
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" />
          <TextInput
            onChange={e => setThumbnailUrl(e.nativeEvent.text)}
            placeholder="Enter Image Url..."
            style={{color: 'black'}}
            multiline={true}
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            value={values.imageUrl}></TextInput>
          {errors.imageUrl && (
            <Text style={{fontSize: 10, color: 'red'}}>{errors.imageUrl}</Text>
          )}
          <Button
            onPress={handleSubmit}
            title="Share"
            disabled={!isValid}></Button>
        </>
      )}
    </Formik>
  );
};

export default FormikPost;
