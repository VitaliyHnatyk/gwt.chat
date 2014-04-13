package com.chat.client.ui;

import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.DivElement;
import com.google.gwt.dom.client.Document;
import com.google.gwt.dom.client.Style;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.*;

/**
 * Created by asus on 10.04.2014.
 */
public class ChatWidget extends Composite {
    interface ChatWidgetUiBinder extends UiBinder<HTMLPanel, ChatWidget> {
    }

    private static ChatWidgetUiBinder uiBinder = GWT.create(ChatWidgetUiBinder.class);

    @UiField
    HTML messagesHtml;

    @UiField
    ScrollPanel scrollPanel;

    @UiField
    Button sendButton;

    @UiField
    TextBox messageForm;
    @UiField
    FlowPanel roomHtml;
    @UiField
    Label userName;
    @UiField
    Button addRoom;

    public ChatWidget() {
        initWidget(uiBinder.createAndBindUi(this));
        scrollPanel.getElement().getFirstChildElement().getStyle().setPosition(Style.Position.ABSOLUTE);
    }

    public String getMessage() {
        String mes = messageForm.getValue();
        messageForm.setValue("");
        return mes;
    }

    public Label getUserName() {
        return userName;
    }

    public void addRoom(String roomName) {
        Anchor an = new Anchor(roomName);
        roomHtml.add(an);

    }

    public Button getSendButton() {
        return sendButton;
    }

    public void setMessages(String text, String color) {
        DivElement div = Document.get().createDivElement();
        div.setInnerHTML(text);
        div.setAttribute("style", "color:" + color);
        messagesHtml.getElement().appendChild(div);
        scrollPanel.scrollToBottom();
    }
}