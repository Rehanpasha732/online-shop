import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Image } from '@react-pdf/renderer';
import img from '../component/images/pic.png'
// import { style } from '@mui/system';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        width: '100%'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },

    size: {
        borderColor: "black",
        backgroundColor: 'black',
        color: 'white',
        height: 20,
        width: 20,
        marginLeft: 10,
        marginTop: 5,
        textAlign: 'center'
    },
    sizes: {
        marginTop: 5,
    },
    color: {
        backgroundColor: "red",
        color: "red",
        height: 20,
        width: 20,
        marginLeft: 10,
        marginTop: 5
    },
    color1: {
        backgroundColor: "black",
        color: "black",
        height: 20,
        width: 20,
        marginLeft: 10,
        marginTop: 5
    },
    color2: {
        backgroundColor: "green", color: "green",
        height: 20, width: 20, marginLeft: 10, marginTop: 5
    },
    direct: {
        display: 'flex', flexDirection: 'row'
    }
});
const additm = JSON.parse(localStorage.getItem('items'))
function PDF() {
    return (
        <Document style={{ width: '100%' }}>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    {/* <Text style={{ backgroundColor: "black", color: "white", textAlign: 'center' }}>Your your order details </Text> */}
                    <View> {additm?.map((v, i) => {
                        return (
                            <>
                                <View style={styles.section} >
                                    <View style={styles.direct}>
                                        <View style={{ width: '60%' }}>
                                            <Text style={styles.sizes}>{v?.p}</Text>
                                            <Text style={styles.sizes}>Rs.{v?.price}</Text>
                                            <Text style={styles.sizes}>Size</Text>
                                            <View style={styles.direct}>
                                                <Text style={styles.size}>S</Text>
                                                <Text style={styles.size}>M</Text>
                                                <Text style={styles.size}>L</Text>
                                            </View>
                                            <Text>Colors</Text>
                                            <View style={styles.direct}>
                                                <Text style={styles.color}>.</Text>
                                                <Text style={styles.color1}>.</Text>
                                                <Text style={styles.color2}>.</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View>
                                        <Image style={{ width: '200px', marginLeft: '300px', marginTop: '-120px' }} src="https://cdn.vox-cdn.com/thumbor/FGgjJpTN8Dv8R8dPeCVnxb06CSc=/0x0:4915x3930/1400x1050/filters:focal(1719x1156:2505x1942):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/61753005/clothingrack.0.jpg" />
                                    </View>
                                </View>
                            </>
                        )
                    })}</View>

                </View>
            </Page>
        </Document>
    );
}

export default PDF