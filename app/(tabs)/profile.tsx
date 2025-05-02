import { View, Text, StyleSheet, ScrollView, Pressable, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, ChevronRight, CircleHelp as HelpCircle, LogOut, User as UserIcon, Award } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profilim</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.profileSection}>
          <View style={styles.profileIconContainer}>
            <UserIcon size={32} color="#0891B2" />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Su Tasarrufçusu</Text>
            <Text style={styles.profileEmail}>user@example.com</Text>
          </View>
          <Pressable style={styles.editButton}>
            <Text style={styles.editButtonText}>Düzenle</Text>
          </Pressable>
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>76</Text>
            <Text style={styles.statLabel}>Su Puanı</Text>
          </View>
          
          <View style={styles.statDivider} />
          
          <View style={styles.statItem}>
            <Text style={styles.statValue}>840</Text>
            <Text style={styles.statLabel}>Tasarruf (LT)</Text>
          </View>
          
          <View style={styles.statDivider} />
          
          <View style={styles.statItem}>
            <Text style={styles.statValue}>4</Text>
            <Text style={styles.statLabel}>Anket</Text>
          </View>
        </View>
        
        <View style={styles.badgesSection}>
          <Text style={styles.sectionTitle}>Rozetlerim</Text>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.badgesContainer}>
            <View style={styles.badgeItem}>
              <View style={[styles.badgeIconContainer, { backgroundColor: '#DBEAFE' }]}>
                <Award size={24} color="#2563EB" />
              </View>
              <Text style={styles.badgeTitle}>Su Dostu</Text>
            </View>
            
            <View style={styles.badgeItem}>
              <View style={[styles.badgeIconContainer, { backgroundColor: '#CFFAFE' }]}>
                <Award size={24} color="#0891B2" />
              </View>
              <Text style={styles.badgeTitle}>Tam Anketçi</Text>
            </View>
            
            <View style={styles.badgeItem}>
              <View style={[styles.badgeIconContainer, { backgroundColor: '#ECFCCB' }]}>
                <Award size={24} color="#65A30D" />
              </View>
              <Text style={styles.badgeTitle}>Tasarrufçu</Text>
            </View>
            
            <View style={[styles.badgeItem, styles.badgeItemDisabled]}>
              <View style={[styles.badgeIconContainer, { backgroundColor: '#F1F5F9' }]}>
                <Award size={24} color="#94A3B8" />
              </View>
              <Text style={styles.badgeTitleDisabled}>Su Uzmanı</Text>
            </View>
          </ScrollView>
        </View>
        
        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Ayarlar</Text>
          
          <View style={styles.settingsContainer}>
            <SettingsItem 
              title="Bildirimler" 
              icon={<Bell size={20} color="#0891B2" />}
              rightElement={<Switch value={true} />}
            />
            
            <SettingsItem 
              title="Günlük Hatırlatıcılar" 
              icon={<Bell size={20} color="#0891B2" />}
              rightElement={<Switch value={true} />}
            />
            
            <SettingsItem 
              title="Yardım ve Destek" 
              icon={<HelpCircle size={20} color="#0891B2" />}
              rightElement={<ChevronRight size={20} color="#94A3B8" />}
            />
            
            <SettingsItem 
              title="Çıkış Yap" 
              icon={<LogOut size={20} color="#EF4444" />}
              textColor="#EF4444"
            />
          </View>
        </View>
        
        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>Versiyon 1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

interface SettingsItemProps {
  title: string;
  icon: React.ReactNode;
  rightElement?: React.ReactNode;
  textColor?: string;
  onPress?: () => void;
}

function SettingsItem({ 
  title, 
  icon, 
  rightElement, 
  textColor = '#0F172A',
  onPress 
}: SettingsItemProps) {
  return (
    <Pressable style={styles.settingsItem} onPress={onPress}>
      <View style={styles.settingsItemLeft}>
        {icon}
        <Text style={[styles.settingsItemTitle, { color: textColor }]}>{title}</Text>
      </View>
      {rightElement}
    </Pressable>
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
  profileSection: {
    backgroundColor: 'white',
    padding: 16,
    margin: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#94A3B8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  profileIconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#CFFAFE', // Cyan-100
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  profileName: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#0F172A', // Slate-900
  },
  profileEmail: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748B', // Slate-500
    marginTop: 2,
  },
  editButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#EFF6FF', // Blue-50
    borderRadius: 16,
  },
  editButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#2563EB', // Blue-600
  },
  statsContainer: {
    backgroundColor: 'white',
    margin: 16,
    marginTop: 0,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#94A3B8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#0C4A6E', // Sky-900
  },
  statLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748B', // Slate-500
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    backgroundColor: '#E2E8F0', // Slate-200
  },
  badgesSection: {
    margin: 16,
    marginTop: 8,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#0F172A', // Slate-900
    marginBottom: 12,
  },
  badgesContainer: {
    flexDirection: 'row',
    marginLeft: -8,
  },
  badgeItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginLeft: 8,
    width: 110,
    alignItems: 'center',
    shadowColor: '#94A3B8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  badgeItemDisabled: {
    opacity: 0.7,
  },
  badgeIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  badgeTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#0F172A', // Slate-900
    textAlign: 'center',
  },
  badgeTitleDisabled: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#94A3B8', // Slate-400
    textAlign: 'center',
  },
  settingsSection: {
    margin: 16,
    marginTop: 8,
  },
  settingsContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#94A3B8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9', // Slate-100
  },
  settingsItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsItemTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    marginLeft: 12,
  },
  versionContainer: {
    alignItems: 'center',
    padding: 16,
    marginTop: 16,
    marginBottom: 32,
  },
  versionText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#94A3B8', // Slate-400
  },
});