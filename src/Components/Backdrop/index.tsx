import { Component } from 'react'
import styled from 'styled-components'

interface IProps {
  backdropClickHandler(): void
}

class Backdrop extends Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  public render(): JSX.Element {
    return <BackdropWrapper onClick={this.clickHandler} />
  }

  private clickHandler = () => {
    this.props.backdropClickHandler()
  }
}

export default Backdrop

const BackdropWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
`
