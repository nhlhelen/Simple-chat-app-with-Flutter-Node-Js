import 'package:flutter/material.dart';
import 'package:sqflite/sqflite.dart';

class Messages {
  Widget getMessageContainer() {

    return Container();
  }

  getMessagesFromDatabase()async{
    var localDb = await openDatabase('messages.db');
    List <Map> messages = await localDb.query("chats");

    var messages 

  }
}
