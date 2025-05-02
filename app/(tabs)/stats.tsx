import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChartBar as BarChart, Droplet, TrendingDown, TrendingUp } from 'lucide-react-native';
import { WaterUsageChart } from '@/components/stats/WaterUsageChart';
import { StatCard } from '@/components/stats/StatCard';

export default function StatsScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Su Tasarrufu İstatistikleri</Text>
      </View>
      
      <ScrollView style={styles.content}>
        {/* Summary Cards */}
        <View style={styles.summaryContainer}>
          <StatCard 
            title="Su Puanınız" 
            value="76" 
            unit="/100"
            trend="+12"
            trendDirection="up"
            icon={<Droplet size={24} color="#0E7490" />}
          />
          
          <StatCard 
            title="Haftalık Tasarruf" 
            value="240" 
            unit="LT"
            trend="+15%"
            trendDirection="up"
            icon={<TrendingUp size={24} color="#16A34A" />}
          />
        </View>

        {/* Water Usage Chart */}
        <View style={styles.chartContainer}>
          <View style={styles.chartHeader}>
            <Text style={styles.chartTitle}>Günlük Su Kullanımı</Text>
            <BarChart size={20} color="#0E7490" />
          </View>
          <WaterUsageChart />
        </View>
        
        {/* Water Saving Areas */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tasarruf Alanları</Text>
          
          <View style={styles.savingAreaCard}>
            <View style={styles.savingAreaHeader}>
              <Text style={styles.savingAreaTitle}>Banyo</Text>
              <Text style={styles.savingAreaValue}>42 LT</Text>
            </View>
            <View style={styles.savingBarContainer}>
              <View style={[styles.savingBar, { width: '80%', backgroundColor: '#0891B2' }]} />
            </View>
          </View>
          
          <View style={styles.savingAreaCard}>
            <View style={styles.savingAreaHeader}>
              <Text style={styles.savingAreaTitle}>Mutfak</Text>
              <Text style={styles.savingAreaValue}>28 LT</Text>
            </View>
            <View style={styles.savingBarContainer}>
              <View style={[styles.savingBar, { width: '60%', backgroundColor: '#0E7490' }]} />
            </View>
          </View>
          
          <View style={styles.savingAreaCard}>
            <View style={styles.savingAreaHeader}>
              <Text style={styles.savingAreaTitle}>Çamaşır</Text>
              <Text style={styles.savingAreaValue}>15 LT</Text>
            </View>
            <View style={styles.savingBarContainer}>
              <View style={[styles.savingBar, { width: '40%', backgroundColor: '#0C4A6E' }]} />
            </View>
          </View>
        </View>
        
        {/* Water Usage Breakdown */}
        <View style={[styles.section, styles.lastSection]}>
          <Text style={styles.sectionTitle}>Su Kullanım Analizi</Text>
          
          <View style={styles.usageBreakdownItem}>
            <View style={styles.usageBreakdownItemHeader}>
              <Text style={styles.usageBreakdownItemTitle}>Duş</Text>
              <Text style={styles.usageBreakdownItemValue}>35%</Text>
            </View>
            <View style={styles.usageBreakdownItemBar}>
              <View style={[styles.usageBreakdownItemFill, { width: '35%', backgroundColor: '#0891B2' }]} />
            </View>
            <Text style={styles.usageBreakdownItemText}>Tasarruf potansiyeliniz: ~18 LT/gün</Text>
          </View>
          
          <View style={styles.usageBreakdownItem}>
            <View style={styles.usageBreakdownItemHeader}>
              <Text style={styles.usageBreakdownItemTitle}>Çamaşır Yıkama</Text>
              <Text style={styles.usageBreakdownItemValue}>25%</Text>
            </View>
            <View style={styles.usageBreakdownItemBar}>
              <View style={[styles.usageBreakdownItemFill, { width: '25%', backgroundColor: '#0E7490' }]} />
            </View>
            <Text style={styles.usageBreakdownItemText}>Tasarruf potansiyeliniz: ~12 LT/gün</Text>
          </View>
          
          <View style={styles.usageBreakdownItem}>
            <View style={styles.usageBreakdownItemHeader}>
              <Text style={styles.usageBreakdownItemTitle}>Bulaşık</Text>
              <Text style={styles.usageBreakdownItemValue}>20%</Text>
            </View>
            <View style={styles.usageBreakdownItemBar}>
              <View style={[styles.usageBreakdownItemFill, { width: '20%', backgroundColor: '#0C4A6E' }]} />
            </View>
            <Text style={styles.usageBreakdownItemText}>Tasarruf potansiyeliniz: ~8 LT/gün</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC', // Slate-50
  },
  header: {
    padding: 16,
    backgroundColor: '#F0F9FF', // Sky-50
  },
  headerTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 22,
    color: '#0C4A6E', // Sky-900
  },
  content: {
    flex: 1,
  },
  summaryContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chartContainer: {
    backgroundColor: 'white',
    margin: 16,
    marginTop: 0,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#94A3B8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  chartTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#0F172A', // Slate-900
  },
  section: {
    padding: 16,
    paddingTop: 0,
  },
  lastSection: {
    paddingBottom: 80, // Add extra padding at the bottom
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#0F172A', // Slate-900
    marginBottom: 16,
  },
  savingAreaCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#94A3B8',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  savingAreaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  savingAreaTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 15,
    color: '#0F172A', // Slate-900
  },
  savingAreaValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 15,
    color: '#0891B2', // Cyan-600
  },
  savingBarContainer: {
    height: 8,
    backgroundColor: '#E2E8F0', // Slate-200
    borderRadius: 4,
    overflow: 'hidden',
  },
  savingBar: {
    height: '100%',
    borderRadius: 4,
  },
  usageBreakdownItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#94A3B8',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  usageBreakdownItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  usageBreakdownItemTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 15,
    color: '#0F172A', // Slate-900
  },
  usageBreakdownItemValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 15,
    color: '#0891B2', // Cyan-600
  },
  usageBreakdownItemBar: {
    height: 8,
    backgroundColor: '#E2E8F0', // Slate-200
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  usageBreakdownItemFill: {
    height: '100%',
    borderRadius: 4,
  },
  usageBreakdownItemText: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#64748B', // Slate-500
  },
});