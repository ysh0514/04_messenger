import styled from 'styled-components';

const ModalWrapper = styled.div<{ isShow: boolean }>`
  display: ${(props) => (!props.isShow ? 'none' : '')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.6);

  button {
    outline: none;
    cursor: pointer;
    border: 0;
  }

  & > section {
    width: 90%;
    max-width: 450px;
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: #fff;
    // animation
    animation: modal-show 0.3s;
    overflow: hidden;

    & > header {
      position: relative;
      padding: 16px 64px 16px 16px;
      background-color: #f1f1f1;
      font-weight: 700;

      button {
        position: absolute;
        top: 15px;
        right: 15px;
        width: 30px;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        color: #999;
        background-color: transparent;
      }

      & > main {
        padding: 16px;
        border-bottom: 1px solid #dee2e6;
        border-top: 1px solid #dee2e6;
      }

      & > footer {
        padding: 12px 12px;
        text-align: right;

        button {
          padding: 6px 12px;
          color: #fff;
          background-color: #6c757d;
          border-radius: 5px;
          font-size: 13px;
        }
      }
    }

		& > open {
			display: : flex;
			align-items: center;
			// animation
			animation: modal-bg-show 0.3;
		}

		@keyframes modal-show {
			from {
				opacity: 0;
				margin-top: -50px;
			}
			to {
				opacity: 1;
				margin-top: 0;
			}
		}
		@keyframe modal-bg-show {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}
  }
`;

const ModalStyle = { ModalWrapper };

export default ModalStyle;
