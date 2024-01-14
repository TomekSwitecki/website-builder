import React, { useEffect } from 'react';
import { sanitizeSvg } from '../../../Utils/sanitizeSvg';
import { prepareIframe } from '../../../Utils/prepareIframe';
const Footer = ({ id, props }) => {
    const generatedStyles = {
        color: props.textColor,
        backgroundColor: props.backgroundColor,
        paddingBlock: props.padding_block.value + props.padding_block.unit,
        paddingInline: props.padding_inline.value + props.padding_inline.unit,
        borderWidth: props.border_width.value + props.border_width.unit,
        borderColor: props.border_color,
        borderStyle: props.border_style,
        gap: props.vertical_gap.value + props.vertical_gap.unit,
    };

    const sanitizedSvg = sanitizeSvg(props.logo_svg.value);

    return (
        <footer className='footer' style={generatedStyles}>
            <div className='footer_content' style={{ gap: props.horizontal_gap.value + props.horizontal_gap.unit }}>
                <div className='footer_content--left'>
                    <div className='footer_content--left-main'>
                        <div style={{ width: props.logo_size.value + props.logo_size.unit }} className={"footer_logo"} dangerouslySetInnerHTML={{ __html: sanitizedSvg }} />
                        <div className='footer_description'>{props.description.value}</div>
                    </div>
                    <div className='footer_content--left-contact'>
                        <div className='footer_contact'>
                            <div className='footer_contact-item'>{props.addres_line_1.value}</div>
                            <div className='footer_contact-item'> {props.addres_line_2.value}</div>
                            <div className='footer_contact-item'>{props.mail.value}</div>
                            <div className='footer_contact-item'>{props.phone.value}</div>
                        </div>
                    </div>

                </div>
                <div className='footer_content--right'>
                    {props.show_map && prepareIframe(props.map_url.value)}
                </div>
            </div>
            <div className='footer_content--copyrigth'>
                {props.copyright.value}
            </div>

        </footer>
    );
};

export default Footer;
