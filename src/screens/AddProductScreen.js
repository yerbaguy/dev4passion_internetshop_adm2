import React from 'react';
import { useState, useEffect } from 'react';
import { View, TextInput, Picker, Button, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { db, addProduct } from '../services/firebase';

const AddProductScreen = ({ navigation }) => {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        categoryId: '',
        description: '',
        imageUri: null
    });
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('categories')
            .onSnapshot(snapshot => {
                setCategories(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            });
        return () => unsubscribe();
    }, []);

    const pickImage = () => {
        launchImageLibrary({ mediaType: 'photo', quality: 1 }, response => {
            if (response.assets && !response.didCancel) {
                setProduct({ ...product, imageUri: response.assets[0].uri });
            }
        });
    };

    const handleAddProduct = async () => {
        const productData = {
            name: product.name,
            price: parseFloat(product.price),
            categoryId: product.categoryId,
            description: product.description,
            createdAt: db.FieldValue.serverTimestamp()
        };
        await addProduct(productData, product.imageUri);
        navigation.goBack();
    };

    return (
        <View style={{ padding: 20 }}>
            <TextInput
                placeholder="Product Name"
                value={product.name}
                onChangeText={text => setProduct({ ...product, name: text })}
                style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
            />
            <TextInput
                placeholder="Price"
                value={product.price}
                onChangeText={text => setProduct({ ...product, price: text })}
                keyboardType="numeric"
                style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
            />
            <Picker
                selectedValue={product.categoryId}
                onValueChange={value => setProduct({ ...product, categoryId: value })}
                style={{ marginBottom: 10 }}
            >
                <Picker.Item label="Select Category" value="" />
                {categories.map(cat => (
                    <Picker.Item key={cat.id} label={cat.name} value={cat.id} />
                ))}
            </Picker>
            <TextInput
                placeholder="Description"
                value={product.description}
                onChangeText={text => setProduct({ ...product, description: text })}
                style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
            />
            <Button title="Pick Image" onPress={pickImage} />
            {product.imageUri && (
                <Image
                    source={{ uri: product.imageUri }}
                    style={{ width: 100, height: 100, marginVertical: 10 }}
                />
            )}
            <Button title="Add Product" onPress={handleAddProduct} />
        </View>
    );
};

export default AddProductScreen;