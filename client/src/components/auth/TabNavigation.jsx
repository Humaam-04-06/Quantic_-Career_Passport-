import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TabNavigation({
  navItems,
  isIsometric,
  activeIndex: externalIndex,
  onTabChange,
}) {
  const [internalIndex, setInternalIndex] = useState(0);

  const activeIndex = externalIndex !== undefined ? externalIndex : internalIndex;

  const translateX = activeIndex * 100;
  const indicatorStyle = {
    width: `${100 / navItems.length}%`,
    transform: `translateX(${translateX}%)`,
  };
  const paneStyle = {
    transform: `translateX(${-translateX}%)`,
  };

  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      const index = navItems.findIndex((item) => item.href === hash);

      if (index !== -1) {
        setInternalIndex(index);
        if (onTabChange) onTabChange(index);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [navItems, onTabChange]);

  const handleTabSelect = (e, index) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (onTabChange) {
      onTabChange(index);
    } else {
      setInternalIndex(index);
    }
    window.location.hash = navItems[index].href;
  };

  return (
    <div className={clsx('tab-nav', isIsometric && 'tab-nav--isometric')}>
      <nav className="tab-bar">
        <ul className="tab-bar__list">
          {navItems.map((item, i) => {
            const key = `tab-bar-item${i}`;
            const { href, name } = item;
            const isActive = i === activeIndex;

            return (
              <li key={key} className="tab-bar__item">
                <a
                  className={clsx(
                    'tab-bar__link',
                    isActive && 'tab-bar__link--active'
                  )}
                  href={href}
                  onClick={(e) => handleTabSelect(e, i)}
                  onPointerDown={(e) => handleTabSelect(e, i)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="tab-bar__indicator" style={indicatorStyle}></div>
      </nav>
      <div className="tab-nav__pane-wrapper">
        {navItems.map((item, i) => {
          const key = `tab-bar-pane${i}`;
          const { icon, title, subtext, badge, image } = item;
          const isActive = i === activeIndex;

          return (
            <div
              key={key}
              className="tab-nav__pane"
              aria-hidden={!isActive}
              style={paneStyle}
            >
              <div className="tab-nav__pane-content p-0 overflow-hidden">
                {image ? (
                  /* Image-Only Mode for Right Side Preview */
                  <div className="relative w-full h-full flex items-center justify-center p-3">
                    <img
                      src={image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-2xl border border-white/15 shadow-xl brightness-95 contrast-110"
                    />
                    {/* Dark Frosted Glass Overlay with Refraction Glow */}
                    <div className="absolute inset-3 rounded-2xl bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
                    
                    {/* Bottom Status Tag */}
                    <div className="absolute bottom-6 left-6 right-6 p-2.5 rounded-xl bg-black/65 backdrop-blur-md border border-white/15 flex items-center justify-between">
                      <span className="text-xs font-bold text-white font-mono">{item.name}</span>
                      <span className="text-[10px] font-extrabold text-[#E8602E] bg-[#E8602E]/20 px-2 py-0.5 rounded border border-[#E8602E]/30">
                        {badge || 'LIVE PREVIEW'}
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Standard Heading + Icon + Paragraph Mode for Left Tab */
                  <div className="flex flex-col items-center justify-center text-center p-4 h-full space-y-3">
                    {icon && (
                      <div className="w-12 h-12 rounded-2xl bg-[#E8602E]/20 text-[#E8602E] flex items-center justify-center text-xl shadow-glow-orange-sm">
                        <FontAwesomeIcon icon={icon} />
                      </div>
                    )}
                    <h4 className="text-sm font-extrabold text-white">{title}</h4>
                    <p className="text-xs text-[#A1A1AA] max-w-[210px] leading-relaxed">
                      {subtext}
                    </p>
                    {badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E8602E]/20 text-[#E8602E] border border-[#E8602E]/30">
                        {badge}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
