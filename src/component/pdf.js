import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import './style.css'
import { Image } from '@react-pdf/renderer'
import { AddIcCallTwoTone } from '@mui/icons-material';
// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    }
});
const additm = JSON.parse(localStorage.getItem('items'))
const PDF = () => (
    <Document >
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={{margin:'30px', fontSize:'50px'}}>
                    {
                        additm?.map((v, i) => {
                            return (
                                <>
                                <View style={styles.section}>
                                    <Text>{v?.paragraph} </Text>
                                    <Text>{v?.price} </Text>

                                </View>
                                </>
                            )
                        })
                    }


                </Text>
            </View>
        </Page>
    </Document>
);

export default PDF