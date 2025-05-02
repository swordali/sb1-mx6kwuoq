import { View, Text, StyleSheet } from 'react-native';

export function WaterUsageChart() {
  // Mock data for the chart
  const chartData = [
    { day: 'Pzt', value: 80 },
    { day: 'Sal', value: 90 },
    { day: 'Çar', value: 65 },
    { day: 'Per', value: 70 },
    { day: 'Cum', value: 85 },
    { day: 'Cmt', value: 55 },
    { day: 'Paz', value: 45 },
  ];
  
  const maxValue = Math.max(...chartData.map(item => item.value));
  
  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        {chartData.map((item, index) => {
          const barHeight = (item.value / maxValue) * 130;
          
          return (
            <View key={index} style={styles.barContainer}>
              <View style={styles.barLabelContainer}>
                <Text style={styles.barValue}>{item.value}</Text>
              </View>
              
              <View style={styles.barWrapper}>
                <View 
                  style={[
                    styles.bar, 
                    { 
                      height: barHeight,
                      backgroundColor: 
                        item.value > 80 ? '#0E7490' :
                        item.value > 60 ? '#0891B2' :
                        '#06B6D4'
                    }
                  ]} 
                />
              </View>
              
              <Text style={styles.barLabel}>{item.day}</Text>
            </View>
          );
        })}
      </View>
      
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColorBox, { backgroundColor: '#0E7490' }]} />
          <Text style={styles.legendText}>Yüksek</Text>
        </View>
        
        <View style={styles.legendItem}>
          <View style={[styles.legendColorBox, { backgroundColor: '#0891B2' }]} />
          <Text style={styles.legendText}>Orta</Text>
        </View>
        
        <View style={styles.legendItem}>
          <View style={[styles.legendColorBox, { backgroundColor: '#06B6D4' }]} />
          <Text style={styles.legendText}>Düşük</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 180,
    paddingTop: 20,
  },
  barContainer: {
    flex: 1,
    alignItems: 'center',
  },
  barLabelContainer: {
    position: 'absolute',
    top: 0,
    alignItems: 'center',
  },
  barValue: {
    fontFamily: 'Inter-Medium',
    fontSize: 10,
    color: '#64748B', // Slate-500
  },
  barWrapper: {
    height: 130,
    justifyContent: 'flex-end',
  },
  bar: {
    width: 16,
    borderRadius: 8,
  },
  barLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#64748B', // Slate-500
    marginTop: 8,
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  legendColorBox: {
    width: 12,
    height: 12,
    borderRadius: 3,
    marginRight: 4,
  },
  legendText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#64748B', // Slate-500
  },
});