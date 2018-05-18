//
//  CalendarManager.m
//  NavigationProject
//
//  Created by Joky_Lee on 2018/5/18.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "CalendarManager.h"
#import <React/RCTLog.h>
#import <React/RCTConvert.h>
@implementation CalendarManager
RCT_EXPORT_MODULE();
//1
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"尝试构建方法%@-at-%@",name,location);
}
//2
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(NSString *)ISO8601DateString)
{
  NSDate *date = [RCTConvert NSDate:ISO8601DateString];
}
//3随着CalendarManager.addEvent方法变得越来越复杂，参数的个数越来越多 已NSDictionary来传递
RCT_EXPORT_METHOD(addEvent:(NSString *)name details:(NSDictionary *)details)
{
  NSString *location = [RCTConvert NSString:details[@"location"]];
  NSDate *time = [RCTConvert NSDate:details[@"time"]];
  NSLog(@"JS--调起原生app-%@---%@",location,time);
}
//回调
RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback)
{
  NSArray *events = @[@"1",@"2"];
  callback(@[[NSNull null], events]);
  NSLog(@"JS--调起原生app--%@",events);
}


@end
