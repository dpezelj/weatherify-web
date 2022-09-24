import { Box, Stack, useTheme } from '@mui/material';
import { usePrepareWeatherData } from '../../hooks/usePrepareWeatherData';
import { CurrentCard } from './CurrentCard';

export const CurrentFeed = () => {
  const theme = useTheme();
  const { textCards, secondary, tertiary } = theme.colors;

  const { currentList, airQualityList } = usePrepareWeatherData();

  return (
    <Box sx={{ flex: 1, background: secondary, borderRadius: '1rem', p: '2rem', fontFamily: 'Roboto' }}>
      <Stack direction="row" justifyContent="space-between" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
        <CurrentCard
          title={'Current weather'}
          cardBgColor={tertiary}
          cardTextColor={textCards}
          cardBorderColor={secondary}
          dataList={currentList}
        />

        <CurrentCard
          title={'Air quality'}
          cardBgColor={tertiary}
          cardTextColor={textCards}
          cardBorderColor={secondary}
          dataList={airQualityList}
        />
      </Stack>
      <Stack direction="column" justifyContent="space-between" spacing={2} sx={{ display: { xs: 'flex', md: 'none' } }}>
        <CurrentCard
          title={'Current weather'}
          cardBgColor={tertiary}
          cardTextColor={textCards}
          cardBorderColor={secondary}
          dataList={currentList}
        />

        <CurrentCard
          title={'Air quality'}
          cardBgColor={tertiary}
          cardTextColor={textCards}
          cardBorderColor={secondary}
          dataList={airQualityList}
        />
      </Stack>
    </Box>
  );
};