// モーダル機能の実装
class Modal {
  constructor(modalId) {
    // DOM要素の取得
    this.modal = document.getElementById(modalId);
    this.addToCartBtn = document.getElementById('add-to-cart-btn');
    this.closeBtn = this.modal.querySelector('.modal__close');
    this.overlay = this.modal.querySelector('.modal__overlay');
    this.continueBtn = this.modal.querySelector('.modal__button--secondary');
    this.viewCartBtn = this.modal.querySelector('.modal__button--primary');
    
    // フォーカス管理用
    this.focusableElements = this.modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    this.firstFocusableElement = this.focusableElements[0];
    this.lastFocusableElement = this.focusableElements[this.focusableElements.length - 1];
    
    // イベントリスナーの設定
    this.initEventListeners();
  }
  
  // イベントリスナーの初期化
  initEventListeners() {
    // Add to Cartボタンクリックでモーダル表示
    this.addToCartBtn.addEventListener('click', () => {
      this.openModal();
    });
    
    // 閉じるボタンクリックでモーダル非表示
    this.closeBtn.addEventListener('click', () => {
      this.closeModal();
    });
    
    // オーバーレイクリックでモーダル非表示
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
        this.closeModal();
      }
    });
    
    // Continue Shoppingボタンクリックでモーダル非表示
    this.continueBtn.addEventListener('click', () => {
      this.closeModal();
    });
    
    // View Cartボタン（実際のECサイトではカートページに遷移）
    this.viewCartBtn.addEventListener('click', () => {
      alert('カートページに移動します（デモ）');
      this.closeModal();
    });
    
    // ESCキーでモーダル非表示
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) {
        this.closeModal();
      }
    });
    
    // モーダル内でのフォーカストラップ
    this.modal.addEventListener('keydown', (e) => {
      this.handleTabKey(e);
    });
  }
  
  // モーダルを開く
  openModal() {
    // モーダル表示
    this.modal.classList.add('is-active');
    this.modal.setAttribute('aria-hidden', 'false');
    
    // body要素のスクロールを無効化
    document.body.style.overflow = 'hidden';
    
    // 最初のフォーカス可能要素にフォーカス
    setTimeout(() => {
      this.firstFocusableElement.focus();
    }, 100);
    
    console.log('モーダルが開かれました');
  }
  
  // モーダルを閉じる
  closeModal() {
    // モーダル非表示
    this.modal.classList.remove('is-active');
    this.modal.setAttribute('aria-hidden', 'true');
    
    // body要素のスクロールを有効化
    document.body.style.overflow = '';
    
    // Add to Cartボタンにフォーカスを戻す
    this.addToCartBtn.focus();
    
    console.log('モーダルが閉じられました');
  }
  
  // モーダルが開いているかチェック
  isOpen() {
    return this.modal.classList.contains('is-active');
  }
  
  // Tabキーでのフォーカス管理（フォーカストラップ）
  handleTabKey(e) {
    if (e.key !== 'Tab') return;
    
    if (e.shiftKey) {
      // Shift + Tab（逆方向）
      if (document.activeElement === this.firstFocusableElement) {
        e.preventDefault();
        this.lastFocusableElement.focus();
      }
    } else {
      // Tab（順方向）
      if (document.activeElement === this.lastFocusableElement) {
        e.preventDefault();
        this.firstFocusableElement.focus();
      }
    }
  }
}

// DOM読み込み完了後にモーダルを初期化
document.addEventListener('DOMContentLoaded', () => {
  const cartModal = new Modal('cart-modal');
  console.log('モーダル機能が初期化されました');
});