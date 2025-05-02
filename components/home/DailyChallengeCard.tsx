import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Award } from 'lucide-react-native';

interface DailyChallengeCardProps {
  title: string;
  description: string;
  onPress: () => void;
}

export function DailyChallengeCard({ title, description, onPress }: DailyChallengeCardProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Award size={24} color="#0E7490" />
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Başla</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F9FF', // Sky-50
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#94A3B8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  iconContainer: {
    width: 48,
    height: 48,
    backgroundColor: '#CFFAFE', // Cyan-100
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#0F172A', // Slate-900
    marginBottom: 4,
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#475569', // Slate-600
    marginBottom: 12,
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#0891B2', // Cyan-600
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: 'white',
  },
});