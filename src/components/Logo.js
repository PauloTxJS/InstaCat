import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Logo = () => {
    return(
        <Text style={styles.logo}>Instacat</Text>
    );
}

const styles = StyleSheet.create({
    logo: {
        alignSelf: 'center',
        marginVertical: 20,
    }
});

export default Logo;