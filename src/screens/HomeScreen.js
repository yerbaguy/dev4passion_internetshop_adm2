import React from 'react';
import { useState, useEffect } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { db } from '../services/firebase';

const HomeScreen = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('categories')
            .onSnapshot(snapshot => {
                const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setCategories(data.filter(cat => !cat.parentId)); // Top-level categories only
            });
        return () => unsubscribe();
    }, []);

    const renderCategory = ({ item }) => (
        <TouchableOpacity style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>Shop Categories</Text>
            <FlatList
                data={categories}
                renderItem={renderCategory}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default HomeScreen;