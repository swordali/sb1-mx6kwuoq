import { View, Text, StyleSheet } from 'react-native';
import { Droplet, Package } from 'lucide-react-native';

interface WaterTipProps {
  title: string;
  description: string;
  iconName: 'droplet' | 'package';
}

export function WaterTip({ title, description, iconName }: WaterTipProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {iconName === 'droplet' ? (
          <Droplet size={24} color="#0E7490" />
        ) : (
          <Package size={24} color="#0E7490" />
        )}
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
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
    lineHeight: 20,
  },
});