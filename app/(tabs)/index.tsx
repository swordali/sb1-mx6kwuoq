import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Droplet as DropletIcon, TrendingUp as TrendingUpIcon, Award as AwardIcon } from 'lucide-react-native';
import { WaterUsageWidget } from '@/components/home/WaterUsageWidget';
import { DailyChallengeCard } from '@/components/home/DailyChallengeCard';
import { WaterTip } from '@/components/home/WaterTip';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Merhaba!</Text>
          <Text style={styles.headerTitle}>Su Tasarrufu Asistanı</Text>
        </View>

        <WaterUsageWidget />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Günlük Meydan Okuma</Text>
          <DailyChallengeCard 
            title="Duş süresini 2 dakika kısalt"
            description="Duş süresini kısaltarak günde 15 litre su tasarrufu yapabilirsiniz."
            onPress={() => router.push('/survey')}
          />
        </View>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Hızlı Anketler</Text>
            <Pressable onPress={() => router.push('/survey')}>
              <Text style={styles.seeAllText}>Tümünü Gör</Text>
            </Pressable>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.surveysContainer}>
            <Pressable 
              style={styles.surveyCard}
              onPress={() => router.push('/survey')}
            >
              <DropletIcon color="#0891B2" size={24} />
              <Text style={styles.surveyCardTitle}>Banyo</Text>
              <Text style={styles.surveyCardDesc}>5 soru • 2 dk</Text>
            </Pressable>
            
            <Pressable 
              style={styles.surveyCard}
              onPress={() => router.push('/survey')}
            >
              <TrendingUpIcon color="#0891B2" size={24} />
              <Text style={styles.surveyCardTitle}>Mutfak</Text>
              <Text style={styles.surveyCardDesc}>3 soru • 1 dk</Text>
            </Pressable>
            
            <Pressable 
              style={styles.surveyCard}
              onPress={() => router.push('/survey')}
            >
              <AwardIcon color="#0891B2" size={24} />
              <Text style={styles.surveyCardTitle}>Bahçe</Text>
              <Text style={styles.surveyCardDesc}>4 soru • 2 dk</Text>
            </Pressable>
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Su Tasarrufu İpuçları</Text>
            <Pressable onPress={() => router.push('/tips')}>
              <Text style={styles.seeAllText}>Tümünü Gör</Text>
            </Pressable>
          </View>
          
          <WaterTip 
            title="Diş fırçalarken musluğu kapatın"
            description="Bu basit alışkanlık bir yılda 12,000 litre su tasarrufu sağlayabilir."
            iconName="droplet"
          />
          
          <WaterTip 
            title="Çamaşır makinenizi tam doldurun"
            description="Her yıkamada maksimum verimlilik için çamaşır makinenizi tam kapasitede çalıştırın."
            iconName="package"
          />
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
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  greeting: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#64748B', // Slate-500
  },
  headerTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#0C4A6E', // Sky-900
    marginTop: 4,
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#0F172A', // Slate-900
  },
  seeAllText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#0891B2', // Cyan-600
  },
  surveysContainer: {
    flexDirection: 'row',
    marginLeft: -8,
    paddingRight: 8,
  },
  surveyCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginLeft: 8,
    width: 140,
    height: 140,
    shadowColor: '#94A3B8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  surveyCardTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#0F172A',
    marginTop: 12,
  },
  surveyCardDesc: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },
});