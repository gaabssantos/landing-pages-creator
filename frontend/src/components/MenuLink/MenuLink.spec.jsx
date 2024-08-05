import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link='https://youtube.com/'>Children</MenuLink>);
    const menu = screen.getByText('Children');

    expect(menu).toBeInTheDocument();
    expect(menu).toHaveAttribute('href', 'https://youtube.com/');
  });

  it('should render a link with target _self', () => {
    renderTheme(<MenuLink link='https://youtube.com/' newTab={false}>Children</MenuLink>);
    const menu = screen.getByText('Children');

    expect(menu).toBeInTheDocument();
    expect(menu).toHaveAttribute('target', '_self');
  });

  it('should render a link with target _blank', () => {
    renderTheme(<MenuLink link='https://youtube.com/' newTab={true}>Children</MenuLink>);
    const menu = screen.getByText('Children');

    expect(menu).toBeInTheDocument();
    expect(menu).toHaveAttribute('target', '_blank');
  });

  it('should match snapshot', () => {
    const {container} = renderTheme(<MenuLink link='https://youtube.com/' newTab={true}>Children</MenuLink>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
