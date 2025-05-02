import { View, Text, StyleSheet } from 'react-native';

export function WaterUsageWidget() {
  // This would ideally be calculated based on survey answers
  const currentScore = 76;
  const prevScore = 64;
  const improvement = currentScore - prevScore;
  
  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <View style={styles.scoreCircle}>
          <Text style={styles.scoreText}>{currentScore}</Text>
          <Text style={styles.scoreLabel}>/100</Text>
        </View>
        <View>
          <Text style={styles.scoreTitle}>Su Tasarrufu</Text>
          <Text style={styles.scoreSubtitle}>Puanınız</Text>
          {improvement > 0 && (
            <View style={styles.improvementBadge}>
              <Text style={styles.improvementText}>+{improvement} puan</Text>
            </View>
          )}
        </View>
      </View>
      
      <View style={styles.usageStatsContainer}>
        <View style={styles.usageStat}>
          <Text style={styles.usageStatLabel}>Günlük Tasarruf</Text>
          <Text style={styles.usageStatValue}>43 LT</Text>
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.usageStat}>
          <Text style={styles.usageStatLabel}>Haftalık Tasarruf</Text>
          <Text style={styles.usageStatValue}>308 LT</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#94A3B8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  scoreContainer: {
    backgroundColor: '#ECFEFF', // Cyan-50
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreCircle: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    shadowColor: '#0E7490',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  scoreText: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    color: '#0E7490', // Cyan-700
  },
  scoreLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#0E7490', // Cyan-700
    marginTop: -4,
  },
  scoreTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#0F172A', // Slate-900
  },
  scoreSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#0F172A', // Slate-900
    marginTop: -2,
  },
  improvementBadge: {
    backgroundColor: '#DCFCE7', // Green-100
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginTop: 4,
  },
  improvementText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#16A34A', // Green-600
  },
  usageStatsContainer: {
    flexDirection: 'row',
    padding: 16,
  },
  usageStat: {
    flex: 1,
    alignItems: 'center',
  },
  usageStatLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#64748B', // Slate-500
    marginBottom: 4,
  },
  usageStatValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#0891B2', // Cyan-600
  },
  divider: {
    width: 1,
    backgroundColor: '#E2E8F0', // Slate-200
  },
});