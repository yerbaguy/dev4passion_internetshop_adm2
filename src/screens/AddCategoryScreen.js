import React from 'react';
import { useState, useEffect } from 'react';
import { View, TextInput, Picker, Button } from 'react-native';
import { db } from '../services/firebase';

const AddCategoryScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [parentId, setParentId] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('categories')
            .onSnapshot(snapshot => {
                const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setCategories(data);
            });
        return () => unsubscribe();
    }, []);

    const handleAddCategory = async () => {
        await db.collection('categories').add({
            name,
            parentId: parentId || null, // Null if no parent
            createdAt: db.FieldValue.serverTimestamp()
        });
        navigation.goBack();
    };

    return (
        <View style={{ padding: 20 }}>
            <TextInput
                placeholder="Category Name"
                value={name}
                onChangeText={setName}
                style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
            />
            <Picker
                selectedValue={parentId}
                onValueChange={setParentId}
                style={{ marginBottom: 10 }}
            >
                <Picker.Item label="No Parent" value="" />
                {categories.map(cat => (
                    <Picker.Item key={cat.id} label={cat.name} value={cat.id} />
                ))}
            </Picker>
            <Button title="Add Category" onPress={handleAddCategory} />
        </View>
    );
};

export default AddCategoryScreen;