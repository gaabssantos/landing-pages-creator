import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';
import { theme } from '../../styles/theme';

describe('<TextComponent />', () => {
  it('should render', () => {
    renderTheme(<TextComponent>Texto</TextComponent>);
    expect(screen.getByText('Texto')).toBeInTheDocument();
  });

  it('should have font-size medium', () => {
    renderTheme(<TextComponent>Texto</TextComponent>);
    expect(screen.getByText('Texto')).toHaveStyleRule(
      'font-size',
      theme.fonts.sizes.medium,
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>Texto</TextComponent>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
