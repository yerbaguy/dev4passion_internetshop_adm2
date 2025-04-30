import React from 'react';
import { View, Button } from 'react-native';

const AdminDashboardScreen = ({ navigation }) => {
    return (
        <View style={{ padding: 20 }}>
            <Button
                title="Add Category"
                onPress={() => navigation.navigate('AddCategory')}
            />
            <Button
                title="Add Product"
                onPress={() => navigation.navigate('AddProduct')}
                style={{ marginTop: 10 }}
            />
        </View>
    );
};

export default AdminDashboardScreen;