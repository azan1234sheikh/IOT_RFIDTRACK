import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 15,
  },
  header: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  section: {
    marginBottom:20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#494141',
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 12,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableCol: {
    width: '20%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 10,
  },
  tableHeader: {
    margin: 'auto',
    marginBottom: 15,
    fontSize: 10,
    fontWeight: 'bold',
  }
});
const PdfComponent = ({employeeData}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>
        IOT EMS 
        </Text>
         <Text style={styles.header}>
         Attendance Details
        </Text>
        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.label}>Employee Name:</Text>
            <Text style={styles.value}>{employeeData?.firstName || 'N/A'}</Text>
          </View>
          
          <View style={styles.row}>
            <Text style={styles.label}>RFID UID:</Text>
            <Text style={styles.value}>{employeeData?.uid || 'N/A'}</Text>
          </View>
          
          <View style={styles.row}>
            <Text style={styles.label}>Role:</Text>
            <Text style={styles.value}>{employeeData?.role || 'N/A'}</Text>
          </View>
           <View style={styles.row}>
            <Text style={styles.label}>Department:</Text>
            <Text style={styles.value}>{employeeData?.department || 'N/A'}</Text>
          </View>
          
          <View style={styles.row}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{employeeData?.Email || 'N/A'}</Text>
          </View>
          
        </View>
         {employeeData?.rfidIndex && employeeData.rfidIndex.length > 0 && (
          <View style={styles.section}>
            <Text style={[styles.label]}>Attendance Records:</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableHeader}>Date</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableHeader}>Device ID</Text>
                </View>
                 <View style={styles.tableCol}>
                  <Text style={styles.tableHeader}>UID</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableHeader}>Check In</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableHeader}>Check Out</Text>
                </View>
              </View>
              
              {employeeData.rfidIndex.map((record, index) => (
                <View style={styles.tableRow} key={index}>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{record.date || 'N/A'}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{record.DeviceId || 'N/A'}</Text>
                  </View>
                    <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{record.uid || 'N/A'}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{record.checkinTime || 'N/A'}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{record.checkoutTime || 'N/A'}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};

export default PdfComponent;