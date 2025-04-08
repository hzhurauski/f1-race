import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './styles.ts';
import { PaginationControlsProps } from './PaginationControls.types.ts';

export const PaginationControls: React.FC<PaginationControlsProps> = ({
  page,
  totalPages,
  onNext,
  onPrev,
  canNext,
  canPrev,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, !canPrev && styles.disabledButton]}
        onPress={onPrev}
        disabled={!canPrev}
      >
        <Text style={styles.buttonText}>Previous</Text>
      </TouchableOpacity>

      <Text style={styles.pageText}>
        Page {page + 1} of {totalPages}
      </Text>

      <TouchableOpacity
        style={[styles.button, !canNext && styles.disabledButton]}
        onPress={onNext}
        disabled={!canNext}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
