import { View, Text, StyleSheet } from 'react-native';
import { TrendingUp, TrendingDown } from 'lucide-react-native';

interface StatCardProps {
  title: string;
  value: string;
  unit: string;
  trend?: string;
  trendDirection?: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
}

export function StatCard({ 
  title, 
  value, 
  unit, 
  trend, 
  trendDirection = 'neutral',
  icon
}: StatCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      
      <Text style={styles.title}>{title}</Text>
      
      <View style={styles.valueContainer}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.unit}>{unit}</Text>
      </View>
      
      {trend && (
        <View style={[
          styles.trendContainer,
          trendDirection === 'up' ? styles.trendUp : trendDirection === 'down' ? styles.trendDown : null
        ]}>
          {trendDirection === 'up' ? (
            <TrendingUp size={12} color="#16A34A" />
          ) : trendDirection === 'down' ? (
            <TrendingDown size={12} color="#DC2626" />
          ) : null}
          <Text style={[
            styles.trendText,
            trendDirection === 'up' ? styles.trendTextUp : trendDirection === 'down' ? styles.trendTextDown : null
          ]}>
            {trend}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    flex: 1,
    marginHorizontal: 4,
    shadowColor: '#94A3B8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ECFEFF', // Cyan-50
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#64748B', // Slate-500
    marginBottom: 4,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  value: {
    fontFamily: 'Inter-Bold',
    fontSize: 22,
    color: '#0F172A', // Slate-900
  },
  unit: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748B', // Slate-500
    marginLeft: 2,
  },
  trendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  trendUp: {
    backgroundColor: '#DCFCE7', // Green-100
  },
  trendDown: {
    backgroundColor: '#FEE2E2', // Red-100
  },
  trendText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    marginLeft: 2,
  },
  trendTextUp: {
    color: '#16A34A', // Green-600
  },
  trendTextDown: {
    color: '#DC2626', // Red-600
  },
});