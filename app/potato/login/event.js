'use client'
import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Event() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [content, setContent] = useState(null);

    useEffect(() => {
        // 페이지가 로드될 때 Sign In 폼을 렌더링
        renderSignInForm();
    }, []);

    const handleOptionClick = (option) => {
      setSelectedOption(option);
      if (option === 'signIn') {
        renderSignInForm();
      } else if (option === 'signUp') {
        renderSignUpForm();
      }
    };

    const renderSignUpForm = () => {
      setContent(
        <div>
          <div className="title"><h2>Sign Up</h2></div>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <p><input type="checkbox" /> I agree to the Privacy Policy and Terms of Use</p>
          <button>Sign Up</button>
          <button>Sign Up with Google</button>
        </div>
      );
    };

    const renderSignInForm = () => {
      setContent(
        <div>
          <div className="title"><h2>Sign In</h2></div>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="checkbox" /> Remember me
          <button>Sign In</button>
          <button>Sign In with Google</button>
        </div>
      );
    };

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.options}>
                    <div
                    className={`${styles.option} ${selectedOption === 'signIn' ? styles.selected : ''}`}
                    onClick={() => handleOptionClick('signIn')}
                    >
                    Sign In
                    </div>
                    <div
                    className={`${styles.option} ${selectedOption === 'signUp' ? styles.selected : ''}`}
                    onClick={() => handleOptionClick('signUp')}
                    >
                    Sign Up
                    </div>
                </div>
            </div>
            <div className={styles.content}>{content}</div>
        </div>
    );
}
